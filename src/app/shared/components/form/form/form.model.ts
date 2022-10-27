import { InputModel } from "../../input/input.models";

export class FormModel{
    rows: Array<RowModel> = new Array<RowModel>();

    public addRow(newRow: RowModel): FormModel{
        this.rows.push(newRow);
        return this;
    }
}

export class RowModel{
    cols: Array<ColModel> = new Array<ColModel>();

    public addCol(newCol: ColModel): RowModel{
        this.cols.push(newCol);
        return this;

    }
}

export class ColModel{
    class: string = 'col';
    input: InputModel = new InputModel();

    public setInput(newInput: InputModel): ColModel{
        this.input = newInput;
        return this;
    }

}