import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
    providedIn: "root",
})
export class MessageService {
    constructor() { }

    msgInfo(text: string, callBack?: any) {
        Swal.fire({
            icon: "info",
            html: text.toUpperCase(),
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: "Aceptar",
        }).then((resultado) => {
            if (callBack) callBack();
        });
    }

    msgSuccess(text: string, callBack?: any) {
        Swal.fire({
            icon: "success",
            html: text.toUpperCase(),
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: "Aceptar",
        }).then((resultado) => {
            if (callBack) callBack();
        });
    }

    msgWarning(text: string, callBack?: any) {
        Swal.fire({
            icon: "warning",
            html: text.toUpperCase(),
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonColor: "#f8bb86",
            confirmButtonText: "Aceptar",
        }).then((resultado) => {
            if (callBack) callBack();
        });
    }

    msgConfirm(text: string, callBackOk?: any, callBackError?: any) {
        Swal.fire({
            html: text.toUpperCase(),
            icon: "question",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
            cancelButtonColor: "#b5b3b3",
            cancelButtonText: "NO",
            confirmButtonText: "SI",
            reverseButtons: false,
        }).then((resultado) => {
            if (resultado.value) {
                if (callBackOk) callBackOk();
            } else if (callBackError) callBackError();
        });
    }

    msgError(text: string, callBack?: any): boolean {
        Swal.fire({
            icon: "error",
            html: text.toUpperCase(),
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: "#d33",
            cancelButtonText: "Aceptar",
        }).then((value) => {
            if (callBack) callBack();
        });
        return false;
    }

    msgConfirmGuard(text: string, callBackOk?: any, callBackError?: any): any {
        return Swal.fire({
            html: text,
            icon: "question",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
            cancelButtonColor: "#b5b3b3",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Aceptar",
            reverseButtons: true,
        }).then((resultado) => {
            if (resultado.value) {
                if (callBackOk) return callBackOk();
            } else if (callBackError) return callBackError();
        });
    }
}
