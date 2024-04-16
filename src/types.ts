export type PropsTab = {
    EPI: undefined;
    Equipamento: undefined;
    Holerite: undefined;
};

export type PropsStack = PropsTab & {
    SolicitarEpi: undefined;
    SolicitarEquipamento: undefined;
    HoleriteTabs: undefined;
    Login: undefined;
    EsqueceuSenha: undefined;
    PrimeiroAcesso: undefined;
    Credencial: undefined;
    Verificacao: undefined;
    EnviarCod: undefined;
    AlterarSenha: undefined;
    SenhaRedefinida: undefined;
    Foto: undefined;
};

export type RouteNames =
    | "SolicitarEpi"
    | "SolicitarEquipamento"
    | "HoleriteTabs"
    | "Login"
    | "EsqueceuSenha"
    | "PrimeiroAcesso"
    | "Credencial"
    | "Verificacao"
    | "EnviarCod"
    | "AlterarSenha" // Substitua com suas rotas reais
    | "SenhaRedefinida"
    | "Foto"; // Continue adicionando todas as rotas necessárias
