import DataTable from "datatables.net-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.html5";
import jQuery from "jquery";
import JSZip from "jszip";
import pdfMake from "pdfmake";

DataTable.Buttons.jszip(JSZip);
DataTable.Buttons.pdfMake(pdfMake);

export { DataTable, jQuery };
