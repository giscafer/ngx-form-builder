import { isNotNil } from "./check";
import { type } from "os";
export const ListOfGridSizeName = ['xs', 'sm', 'md', 'lg', 'xl'];


export function getClassMap(widget): string[] {
    if (!widget || typeof widget !== 'object') return [];
    widget._prefixCls = widget._prefixCls ? widget._prefixCls : 'col';
    let grid = widget.grid;
    if (!grid && typeof grid !== 'object') {
        return [];
    }
    let _classList = [
        isNotNil(grid.span) && `${widget._prefixCls}-${grid.span}`,
        isNotNil(grid.order) && `${widget._prefixCls}-order-${grid.order}`,
        isNotNil(grid.offset) && `${widget._prefixCls}-offset-${grid.offset}`,
        isNotNil(grid.pull) && `${widget._prefixCls}-pull-${grid.pull}`,
        isNotNil(grid.push) && `${widget._prefixCls}-push-${grid.push}`,
        ...generateClass(widget)
    ];
    _classList = _classList.filter((item) => {
        return !!item;
    });
    return _classList;
}

export function generateClass(widget): string[] {
    let listOfClassName: string[] = [];
    let grid = widget.grid;
    ListOfGridSizeName.forEach(name => {
        if (isNotNil(grid[name])) {
            if ((typeof (grid[name]) === 'number') || (typeof (grid[name]) === 'string')) {
                listOfClassName.push(`${widget._prefixCls}-${name}-${grid[name]}`);
            } else {
                listOfClassName.push(grid[name] && isNotNil(grid[name].span) && `${widget._prefixCls}-${name}-${grid[name].span}`);
                listOfClassName.push(grid[name] && isNotNil(grid[name].pull) && `${widget._prefixCls}-${name}-pull-${grid[name].pull}`);
                listOfClassName.push(grid[name] && isNotNil(grid[name].push) && `${widget._prefixCls}-${name}-push-${grid[name].push}`);
                listOfClassName.push(grid[name] && isNotNil(grid[name].offset) && `${widget._prefixCls}-${name}-offset-${grid[name].offset}`);
                listOfClassName.push(grid[name] && isNotNil(grid[name].order) && `${widget._prefixCls}-${name}-order-${grid[name].order}`);
            }
        }

    });
    listOfClassName = listOfClassName.filter((item) => {
        return !!item;
    });
    return listOfClassName;
}