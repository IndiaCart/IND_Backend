import express from "express";
import { createVariationTemplate, deleteVariationTemplate, getAllVariationTemplates, getVariationTemplateById, updateVariationTemplate } from "../../controller/adminController/variationController.js";


const VariationRouter = express.Router();

VariationRouter.post('/', createVariationTemplate);
VariationRouter.get('/', getAllVariationTemplates);
VariationRouter.get('/:id', getVariationTemplateById);
VariationRouter.put('/:id', updateVariationTemplate);
VariationRouter.delete('/:id', deleteVariationTemplate);

export default VariationRouter;
