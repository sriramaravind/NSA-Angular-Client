import { Component, OnInit, ViewChild } from '@angular/core';
import { categoryData } from './datasource'
import { ToolbarService, GridComponent, ExcelExportService, PdfExportService, PageService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations'
import { Ajax } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter } from '@syncfusion/ej2-angular-grids';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';
import { createElement } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    templateUrl: './grid.component.html',
    providers: [ToolbarService, PageService, ExcelExportService, PdfExportService]
})
export class GridviewComponent implements OnInit {

    public gridData: Object[];
    public toolbar: string[];
    public pageSettings: Object;
    public filterOptions: FilterSettingsModel;
    public filter: IFilter;
    public dropInstance: DropDownList;
    @ViewChild('grid')
    public grid: GridComponent;

    public ngOnInit(): void {
        this.gridData = categoryData;
        this.toolbar = ['ExcelExport'];
        this.pageSettings = { pageSize: 31 };
        this.filterOptions = {
            type: 'Menu'
        };
        this.filter = {
            ui: {
                create: (args: { target: Element, column: object }) => {
                    const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    this.dropInstance = new DropDownList({
                        dataSource: new DataManager(categoryData),
                        fields: { text: 'OrderID', value: 'OrderID' },
                        placeholder: 'Select a value',
                        popupHeight: '200px'
                    });
                    this.dropInstance.appendTo(flValInput);
                },
                write: (args: {
                    column: object, target: Element, parent: any,
                    filteredValue: number | string
                }) => {
                    this.dropInstance.value = args.filteredValue;
                },
                read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                    args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);

                }
            }
        };
    }
    click() {
        const grid = this.grid;  // Grid instance
        const ajax = new Ajax('http://localhost:8080/api/tutorials', 'GET');
        ajax.send();
        ajax.onSuccess = (data: string) => {
            grid.dataSource = JSON.parse(data);
        };
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.text === "Excel Export") {
            this.grid.excelExport();
        }
    }
}