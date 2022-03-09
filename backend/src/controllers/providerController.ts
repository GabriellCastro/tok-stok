import { Router, Request, Response } from 'express';
/* eslint-disable import/extensions */
import {
  getAll, getById, add, update, exclude,
// eslint-disable-next-line import/no-unresolved
} from '../models/providerModel';

const router: Router = Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ erro: 'Deu ruim na Api' });
  }
});

router.get('/', async (_req: Request, res: Response) => {
  try {
    const result = await getAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ erro: 'Deu ruim na API...' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      nome, razaosocial, cnpj, segmento, endereco, telefone, email,
    } = req.body;
    await add({
      nome, razaosocial, cnpj, segmento, endereco, telefone, email,
    });
    return res.status(201).json({ message: 'Criado com Sucesso!' });
  } catch (error) {
    return res.status(500).json({ erro: 'Deu ruim na API...' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      nome, razaosocial, cnpj, segmento, endereco, telefone, email,
    } = req.body;
    await update({
      id, nome, razaosocial, cnpj, segmento, endereco, telefone, email,
    });
    return res.status(201).json({ message: 'Atualizado com Sucesso!' });
  } catch (error) {
    return res.status(500).json({ erro: 'Deu ruim na API...' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await exclude(id);
    return res.status(200).json({ message: 'Deletado com sucesso!' });
  } catch (error) {
    return res.status(500).json({ erro: 'Deu ruim na API...' });
  }
});

// eslint-disable-next-line import/prefer-default-export
export const providerController: Router = router;
