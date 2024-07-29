"use strict";
//  ================ TYPE DATA ================
// type absensi_karyawan = {
//     nama: string;
//     nip: string;
//     clockin: number;
//     clockout: number;
//     statusabsen: boolean;
// }
// function createapi(statusesjob: Istatusjob): void {
//     console.log (
//         `
//         nama job = ${statusesjob.nama_job}
//         nama job group = ${statusesjob.nama_job_group}
//         memiliki start time = ${statusesjob.start_time}
//         memiliki end time = ${statusesjob.end_time}
//         memiliki status job = ${statusesjob.status_job}
//         memiliki tipe cycle = ${statusesjob.cycle}
//         `
//     )
// };
function createapi(statusesjob) {
    console.log(`
        nama job = ${statusesjob.nama_job}
        nama job group = ${statusesjob.nama_job_group}
        memiliki estiamate start time = ${statusesjob.estimated_start_time[0].estimatestarttime}
        memiliki start time = ${statusesjob.start_time}
        memiliki end time = ${statusesjob.end_time}
        memiliki status job = ${statusesjob.status_job}
        memiliki tipe cycle = ${statusesjob.cycle}
        `);
}
;
const jobProperties = {
    nama_job: 'BCA-TEST',
    nama_job_group: 'BCA-TEST-GROUP',
    estimated_start_time: [
        { estimatestarttime: "20240728070000" }
    ],
    start_time: '20240728070000',
    end_time: '20240728080000',
    status_job: 'ended ok',
    cycle: true,
};
createapi(jobProperties);
