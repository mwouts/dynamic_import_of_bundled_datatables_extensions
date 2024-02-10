//import JSZip from 'jszip';
import jQuery from 'jquery';
//import pdfMake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import DataTable from 'datatables.net-bs5';
//import 'datatables.net-buttons-bs5';
//import 'datatables.net-buttons/js/buttons.html5';
 
//DataTable.Buttons.jszip(JSZip);
//DataTable.Buttons.pdfMake(pdfMake);
 
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// https://stackoverflow.com/questions/71229017/how-do-you-export-globals-in-a-bundle-with-esbuild
window.$ = jQuery;
window.DataTable = DataTable;