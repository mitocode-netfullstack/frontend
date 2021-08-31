
//#region PATH DASHBOARD
const dashboardPage = 'dashboard';
const dashboardProductosPage = 'products';
const dashboardCategoriesPage = 'categories';

export const PATHS_DASHBOARD_PAGES = {
    withSlash: `/${dashboardPage}`,
    onlyPath: dashboardPage,

    productosPage: {
        withSlash: `/${dashboardPage}/${dashboardProductosPage}`,
        onlyPath: dashboardProductosPage
    },
    categoriePage: {
        withSlash: `/${dashboardPage}/${dashboardCategoriesPage}`,
        onlyPath: dashboardCategoriesPage
    }
};

//#endregion
