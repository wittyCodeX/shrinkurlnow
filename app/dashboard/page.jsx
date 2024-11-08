"use client";

import React from 'react'
import { Button } from '@mui/material';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { UsersIcon } from "@heroicons/react/24/outline";

const weeklyConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Users",
      data: [50, 40, 60, 80, 120, 350, 200, 230, 200],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: "primary",
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
  },
};
const dailyConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Users",
      data: [50, 150, 300, 320, 500, 350, 200],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: "primary",
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 30,
      },
    },
    fill: {
      opacity: 0.8,
    },
  },
};
const monthConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Users",
      data: [5500, 6400, 4000, 4600, 10000, 8500, 6000, 6300, 9000],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: "primary",
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
  },
};


export default function page() {
  return (
    <>
      <div className="flex items-center justify-center pt-[10rem]">
        <Card className="border w-80 rounded-lg bg-color-[#a50046] dark:bg-color-[#5400a7] shadow-sm">
          <CardHeader className="m-3 text-left lounded-lg absolute grid h-15 w-15 bg-color-[#a50046] dark:bg-color-[#5400a7]">
            <UsersIcon className="grid h-12 w-12 " />
          </CardHeader>
          <CardBody className="p-4 text-right">
            <Typography variant="small" className="text-3xl font-bold mb-4 text-end">
              Today's Users
            </Typography>
            <Typography variant="h4" color="blue-gray">
              230
            </Typography>
          </CardBody>
          <CardFooter className="border-t border-blue-gray-50 p-4">

          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center h-[100]">

        <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          <CardBody className="px-2 pb-3">
            <Chart {...weeklyConfig} />
          </CardBody>
          <CardBody className="px-2 pb-3">
            <Chart {...monthConfig} />
          </CardBody>
          <CardBody className="px-2 pb-3">
            <Chart {...dailyConfig} />
          </CardBody>
        </div>

      </div>
    </>
  );
}

