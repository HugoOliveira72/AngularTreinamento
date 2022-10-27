export class InputModel {
    title: string | null = null;
    placeHolder: string = 'Fill this';
    required: boolean = false;
    value: string = '';
    style: string = '';
    sexo : boolean = false;
    blurValidation: Function = function(){};
    mask: Function = this.maskMethodWithValue;

    constructor(title: string | null = null){
        this.title = title;
    }

    private maskMethod: Function = function(text: string){return text};

    private maskMethodWithValue(): void{
        this.value = this.maskMethod(this.value);
    }

    public setMaskMethod(newMaskMethod: Function): InputModel{
        this.maskMethod = newMaskMethod;
        return this;

    }

    public setGenero(): InputModel{
        this.sexo = true;
        this.title = 'Sexo';
        this.required = true;
        return this;
    }

    public setDate(): InputModel{
        this.required = true;
        this.title = 'Date';
        return this;

    }
}