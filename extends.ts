interface IBase {
    id: number;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class InterfaceInheritanceClass implements IDerivedFromBase {
    id: number;
    name: string;
}

class BaseClass implements IBase {
    id: number;
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
    name: string;
}

