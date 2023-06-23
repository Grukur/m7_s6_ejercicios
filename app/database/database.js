import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('m7_s6_ejercicios', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
})
