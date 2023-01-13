import yargs from "yargs";
import got from "got";
import {hideBin} from "yargs/helpers";
import {provinces, currencyFormatter, FISCALYEAR} from "./lab2_routines.js";

// set yargs options
const argv = yargs(hideBin(process.argv))

    .options({
        firstname: {
            demandOption: true,
            alias: ("fname"),
            describe: "Resident's first name",
            string: true,
        },
        lastname: {
            demandOption: true,
            alias: ("lname"),
            describe: "Resident's last name",
            string: true,
        },
        provicialCode: {
            demandOption: true,
            alias: ("prov"),
            describe: "Resident’s home province",
            string: true,
            choices: [
                "NS",
                "NL",
                "NB",
                "PB",
                "QC",
                "ON",
                "MB",
                "SK",
                "AB",
                "BC",
                "NT",
                "NU",
                "YT",
            ]
        }
    });

    let fname = argv.parse().fname;
    let lname = argv.parse().lname;
    let prov = argv.parse().prov;
    let tempStr = "";

    console.log('\nLab 2\n');

const fullNameAndProvincePromise = (fname, lname, provinceCode) => {
    return new Promise((resolve, reject) => {
        if (fname === "err"){
                reject('first name is no good');
        } else if(lname === "err"){
                reject('last name is not good');
        } else if(provinceCode === "err"){
                reject('province code is no good');
        }else {
           resolve(`${lname}, ${fname} lives in ${provinces.find(provinces => provinces.code === provinceCode).name}.`);        
        }
    });
}; 


const transferPaymentsFromWebPromise = () => {
    let srcAddr = "http://www.infrastructure.gc.ca/alt-format/opendata/transfer-program-programmes-de-transfert-bil.json";
    return new Promise((resolve, reject) => {
        got(srcAddr, { responseType: "json" })
                .then((response) => {
                    resolve(response.body.ccbf);
                })
                .catch((err) => {
                    console.log(`Error ==> ${err}`);
                    reject(err);
                });
            }); 
};

const transferPaymentForProvincePromise = (gocData, provCode) => {
    let money = gocData[prov.toLowerCase()][FISCALYEAR];
    return new Promise((resolve, reject) =>{
        if (gocData === 'err'){
            reject('GOC data is no good');
        } else if (provCode === 'err'){
            reject('Province code is no good');
        } else{
            resolve(`It received ${currencyFormatter(money)} in transfer payments.`);
        }
    })
};

// calling chain of promises
fullNameAndProvincePromise(fname, lname, prov)
    .then((results) => {
        tempStr = (results);
        return transferPaymentsFromWebPromise()
    })
    .then((results) => {
        return transferPaymentForProvincePromise(results, prov);
    })
    .then((results) => {
        console.log(tempStr + " " + results);
    });


