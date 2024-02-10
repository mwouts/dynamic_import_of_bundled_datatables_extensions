import JSZip from 'jszip';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import DataTable from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.html5';
 
DataTable.Buttons.jszip(JSZip);
DataTable.Buttons.pdfMake(pdfMake);
 
pdfMake.vfs = pdfFonts.pdfMake.vfs;
