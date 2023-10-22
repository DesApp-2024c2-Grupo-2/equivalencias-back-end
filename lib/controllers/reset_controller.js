import Reset from "../models/reset";
import { getUsuarioDni } from "./usuario_controller"
import Usuario from "../models/usuario";
import { pick } from 'lodash';
const nodeMailer = require('nodemailer');

export const generaHash = async (key) => {
    const palabraRota = key.split("");
    const codigo = palabraRota.map((caracter) => `${caracter}${String(caracter).charCodeAt(0)}`);
    return codigo.join("");
}

export const postReset = async (req, res) => {

    try {
        // busqueda del DNI
        const tiempoTranscurridoDesdeEpoch = Date.now()
        const usuario = await Usuario.findOne({ where: { dni: req.params.dni } });

        // generacion de los datos para el pedido de reset
        const hash = await generaHash((usuario.id + usuario.dni + tiempoTranscurridoDesdeEpoch).toString());
        const usuarioDni = usuario.dni;
        const estado = true
        const dbResponse = await Reset.create({ dni: usuarioDni, hash: hash, estado: estado });

        // envio del mail con la informacion del reset
        const solicitante = usuario.nombre
        const link = hash
        const emailsList = [usuario.email];
        const bodyMail =
            'Hola ' +
            solicitante +
            ',<br> Has solicitado un reset de contraseña. <br> Por favor, ingresa a la siguiente URL : <br><p>' +
            link +
            '</p><br> Si no solicitaste ningun reset de contraseña, por favor descarta este mensaje <br> Desde UNAHUR, nunca te pediremos tus contraseñas.'; +
                '</p><br> Saludos,<br> Equivalencias UNaHur.';

        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD, // 'nzpd frgy frih gylc'
            },
            tls: {
                //rejectUnauthorized: false,
                minVersion: 'TLSv1.2',
            },
        });

        const sendMail = await transporter.sendMail({
            from: `Equivalencias UNaHur <'${process.env.NODEMAILER_USER}'>`, //
            //replyTo: `Equivalencias UNaHur <'${mailSistema}'>`,
            to: emailsList,
            subject:
                'Solicitud de Reset contraseña para Equivalencias UNAHUR',
            html: bodyMail,
        });
        console.log('Message sent: ' + sendMail.messageId);
        console.log(sendMail.accepted);
        console.log(sendMail.rejected);

        // respuesta al pedido del reset
        res.json({
            status: 200,
            message: `Respuesta: ${dbResponse} | Email enviado`,
            user: {
                id: usuario.id,
                dni: usuario.dni,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
            },
        });

    } catch (error) {
        res.json({
            status: 500,
            message: `Datos invalidos o vacios`,
            user: {
                id: '********',
                dni: '********',
                nombre: '********',
                apellido: '********',
                email: '********',
            },
        });
    }
};