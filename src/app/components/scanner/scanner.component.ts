import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { alert } from 'tns-core-modules/ui/dialogs';
import { MenuService } from '../../shared/menu/menu.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private menuService: MenuService) { }

  ngOnInit() {
  }

  scanBarcode() {
		this.barcodeScanner.scan({
			"formats": "QR_CODE, EAN_13",
			"cancelLabel": "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
			"cancelLabelBackgroundColor": "#333333", // iOS only, default '#000000' (black)
			"message": "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
			"showFlipCameraButton": true,   // default false
			"preferFrontCamera": false,     // default false
			"showTorchButton": true,        // default false
			"beepOnScan": true,             // Play or Suppress beep on scan (default true)
			"torchOn": false,               // launch with the flashlight on (default false)
			"closeCallback": () => { console.log("Scanner closed")}, // invoked when the scanner was closed (success or abort)
			"resultDisplayDuration": 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
			"orientation": "orientation",     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
			"openSettingsIfPermissionWasPreviouslyDenied": true // On iOS you can send the user to the settings app if access was previously denied
		}).then((result) => {
      // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
			// alert({
			// 	title: "Scan result",
			// 	message: "Format: " + result.format + ",\nValue: " + result.text,
			// 	okButtonText: "OK"
			// })
			
			console.log("Format: " + result.format + ",\nValue: " + result.text);
			this.menuService.getMenu(result.text)
    }, (errorMessage) => {
			console.log("No scan. " + errorMessage);
			this.menuService.getMenu("text");
    });
	}
}
