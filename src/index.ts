//  ================ TYPE DATA ================
// type absensi_karyawan = {
//     nama: string;
//     nip: string;
//     clockin: number;
//     clockout: number;
//     statusabsen: boolean;
// }

// let data_absensi_karyawan: absensi_karyawan;

// data_absensi_karyawan = {
//     nama: 'Michael Rio Aditya',
//     nip: 'u550642',
//     clockin: 20242107083000,
//     clockout: 20242107173000,
//     statusabsen: true,
// }

// console.log(data_absensi_karyawan);

// ============ FUNCTION =============
// function biasa
// function actionCreate() {
//     let a = 2;
//     let b = 1;
//     let z = a + b;
//     return z;
// }
// function void
// function actionCreate2(): void {
//     let a = 2;
//     let b = 1;
//     let z = a + b;
//     console.log(z);
// }
// arrow function
// const actionCreate2 = (): number => 123;

// var result = actionCreate();
// console.log(result);
// actionCreate2();

// ================ PARAMETER =============
// parameter dengan function void
// function actionCreate(x: number, y: number) :void {
//     let z: number = x + y;
//     console.log(z);
// }

// actionCreate(10,20);

// parameter dengan function biasa
// function actionCreate(x: number, y: number) :string {
//     return `hasil dari penjumlahan x dan y adalah : ${x + y}`;
// }

// function actionCreate2(x: number, y: number) :any {
//     let z = x + y;
//     return z;
// }

// let result = actionCreate2(10, 20);
// console.log(result);

// let result = actionCreate2(10, 30);
// console.log(result);

// ============== INTERFACE CUSTOM TYPE ============
interface Istatusjob {
    nama_job: string;
    nama_job_group: string;
    start_time: string;
    end_time: string;
    status_job: string;
    cycle: boolean;
}

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

interface Cyclejob extends Istatusjob {
    estimated_start_time: { estimatestarttime: string}[];
}

interface NonCyclejob extends Istatusjob {
    
}

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

function createCyclejob(statusesjob: Cyclejob): void {
    console.log (
        `
        nama job = ${statusesjob.nama_job}
        nama job group = ${statusesjob.nama_job_group}
        memiliki estiamate start time = ${statusesjob.estimated_start_time[0].estimatestarttime}
        memiliki start time = ${statusesjob.start_time}
        memiliki end time = ${statusesjob.end_time}
        memiliki status job = ${statusesjob.status_job}
        memiliki tipe cycle = ${statusesjob.cycle}
        `
    )
};

const jobProperties = {
    nama_job: 'ABC-TEST',
    nama_job_group: 'ABC-TEST-GROUP',
    estimated_start_time: [
        { estimatestarttime: "20240728070000" }
    ],
    start_time: '20240728070000',
    end_time: '20240728080000',
    status_job: 'ended ok',
    cycle: true,
};


createCyclejob(jobProperties);