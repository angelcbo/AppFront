var ePosDev = new epson.ePOSDevice();

const PRINTER_IP = process.env.VUE_APP_PRINTER_IP;
const PRINTER_PORRT = process.env.VUE_APP_PRINTER_PORT;
export var printer = null;
export default {
    connect() {


        ePosDev.connect(PRINTER_IP, PRINTER_PORT, callback_connect);
    },
    callback_connect(resultConnect) {
        var deviceId = 'local_printer';
        var options = { 'crypto': false, 'buffer': false };
        if ((resultConnect == 'OK') || (resultConnect == 'SSL_CONNECT_OK')) {
            //Retrieves the Printer object
            ePosDev.createDevice(deviceId, ePosDev.DEVICE_TYPE_PRINTER, options,
                callback_createDevice);
        }
        else {
            //Displays error messages
            console.log("Error callback_connect");
            console.log(resultConnect);
        }
    },
    printer,
    callback_createDevice(deviceObj, errorCode) {
        if (deviceObj === null) {
            //Displays an error message if the system fails to retrieve the Printer object
            console.log("CreateDevice NULL");
            return;
        }
        printer = deviceObj;
        //Registers the print complete event
        printer.onreceive = function (response) {
            if (response.success) {
                //Displays the successful print message
                console.log("Conexion correcta con la impresora.");
            }
            else {
                //Displays error messages
                console.log("Error createDevice");
                console.log(errorCode);
            }
        };
    },
    createData() {
        printer.addTextAlign(printer.ALIGN_CENTER);
        printer.addText('Hello World\n');
    },
    send() {
        if (ePosDev.isConnected) {
            printer.send();
        }
    },
    closeConnection(){
        ePosDev.deleteDevice(printer, callback_deleteDevice);
    },
    callback_deleteDevice(errorCode) {
        //Terminates connection with device
        ePosDev.disconnect();
    },
};
