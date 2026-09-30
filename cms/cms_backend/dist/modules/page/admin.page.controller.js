import { PageBuilderService } from "./admin.page.service";
export async function addPage(req, res) {
    const pages = await PageBuilderService.addPage(req);
    res.json(pages);
}
export async function deletePage(req, res) {
    const message = await PageBuilderService.deletePage(req);
    res.json(message);
}
export async function getElementTypes(req, res) {
    const types = await PageBuilderService.getElementTypes(req);
    res.json(types);
}
export async function getPages(req, res) {
    const pages = await PageBuilderService.getPages(req);
    res.json(pages);
}
//# sourceMappingURL=admin.page.controller.js.map