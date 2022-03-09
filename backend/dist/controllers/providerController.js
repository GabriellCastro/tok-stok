"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerController = void 0;
const express_1 = require("express");
/* eslint-disable import/extensions */
const providerModel_1 = require("../models/providerModel");
const router = (0, express_1.Router)();
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await (0, providerModel_1.getById)(id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ erro: 'Deu ruim na Api' });
    }
});
router.get('/', async (_req, res) => {
    try {
        const result = await (0, providerModel_1.getAll)();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ erro: 'Deu ruim na API...' });
    }
});
router.post('/', async (req, res) => {
    try {
        const { nome, razaosocial, cnpj, segmento, endereco, telefone, email, } = req.body;
        await (0, providerModel_1.add)({
            nome, razaosocial, cnpj, segmento, endereco, telefone, email,
        });
        return res.status(201).json({ message: 'Criado com Sucesso!' });
    }
    catch (error) {
        return res.status(500).json({ erro: 'Deu ruim na API...' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, razaosocial, cnpj, segmento, endereco, telefone, email, } = req.body;
        await (0, providerModel_1.update)({
            id, nome, razaosocial, cnpj, segmento, endereco, telefone, email,
        });
        return res.status(201).json({ message: 'Atualizado com Sucesso!' });
    }
    catch (error) {
        return res.status(500).json({ erro: 'Deu ruim na API...' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await (0, providerModel_1.exclude)(id);
        return res.status(200).json({ message: 'Deletado com sucesso!' });
    }
    catch (error) {
        return res.status(500).json({ erro: 'Deu ruim na API...' });
    }
});
// eslint-disable-next-line import/prefer-default-export
exports.providerController = router;
