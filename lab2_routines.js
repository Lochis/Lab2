import got from "got";

const provinces = [{
        code: "NS",
        name: "Nova Scotia"
    },
    {
        code: "NL",
        name: "Newfoundland"
    },
    {
        code: "NB",
        name: "New Brunswick"
    },
    {
        code: "PE",
        name: "Prince Edward Island"
    },
    {
        code: "QC",
        name: "Quebec"
    },
    {
        code: "ON",
        name: "Ontario"
    },
    {
        code: "MB",
        name: "Manitoba"
    },
    {
        code: "SK",
        name: "Saskatchewan"
    },
    {
        code: "AB",
        name: "Alberta"
    },
    {
        code: "BC",
        name: "British Columbia"
    },
    {
        code: "NT",
        name: "North West Territories"
    },
    {
        code: "NU",
        name: "Nunavut"
    },
    {
        code: "YT",
        name: "Yukon Territory"
    },
];
const FISCALYEAR = "2022-2023";
// Create a currency formatter.
const currencyFormatter = (numberToFormat) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    }).format(numberToFormat);

export {
    provinces,
    currencyFormatter,
    FISCALYEAR
};