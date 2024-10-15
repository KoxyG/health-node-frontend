import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar as CalendarIcon,
  Users,
  Stethoscope,
  Video,
  ChevronRight,
} from "lucide-react";

const appointmentRequests = [
  {
    name: "Bogdan Krivenchenko",
    age: 45,
    gender: "Male",
    date: "12 April 9:30",
    status: "Declined",
  },
  {
    name: "Jenny Wilson",
    gender: "Female",
    date: "25 April 10:30 AM",
    status: "Confirmed",
  },
  {
    name: "Dianne Russel",
    gender: "Male",
    age: 45,
    date: "Today 14:30 PM",
    status: "Confirmed",
  },
  {
    name: "Annette Black",
    gender: "Male",
    age: 45,
    date: "Today 14:30 PM",
    status: "Declined",
  },
  {
    name: "Angelina Jully",
    gender: "Male",
    age: 45,
    date: "Today 14:30 PM",
    status: "Confirmed",
  },
];

const todayAppointments = [
  { name: "Jhon Smith", type: "Clinic Consulting", status: "Ongoing" },
  { name: "Frank Murray", type: "Video Consulting", time: "10:25" },
  { name: "Ella Lucia", type: "Emergency", time: "11:30" },
  { name: "Alyssa Dehn", type: "Clinic Consulting", time: "12:20" },
];

const recentPatients = [
  {
    name: "Deveon Lane",
    visitId: "OPD-2345",
    date: "5/7/21",
    gender: "Male",
    diseases: "Diabetes",
    status: "Out-Patient",
  },
  {
    name: "Albert Flores",
    visitId: "IPD-2424",
    date: "5/7/21",
    gender: "Male",
    diseases: "Diabetes",
    status: "Out-Patient",
  },
  {
    name: "Ella Lucia",
    visitId: "OPD-2345",
    date: "8/15/21",
    gender: "Male",
    diseases: "Diabetes",
    status: "Out-Patient",
  },
  {
    name: "Albert Flores",
    visitId: "IPD-2424",
    date: "8/30/21",
    gender: "Male",
    diseases: "Diabetes",
    status: "Out-Patient",
  },
];

const dashCards = [
  {
    icon: CalendarIcon,
    label: "Appointments",
    value: "24.4k",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    label: "Total Patient",
    value: "166.3k",
    color: "bg-pink-500",
  },
  {
    icon: Stethoscope,
    label: "Clinic Consulting",
    value: "53.5k",
    color: "bg-yellow-500",
  },
  {
    icon: Video,
    label: "Video Consulting",
    value: "28.0k",
    color: "bg-blue-500",
  },
];

// Use this Content component to get ready-made components

export default function Content() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Welcome, Dr. Stephen</h2>
        <p className="text-gray-500">Have a nice day at great work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashCards.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-6">
              <div className={`rounded-full p-3 mr-4 ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Appointment Request</CardTitle>
            <Button variant="link">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointmentRequests.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={`/image/icons8-business-man-with-beard-100.png`}
                        alt={appointment.name}
                      />
                      <AvatarFallback>
                        {appointment.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="text-sm font-medium">{appointment.name}</p>
                      <p className="text-xs text-gray-500">{`${appointment.gender}, ${appointment.date}`}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold">24.4k</p>
                    <p className="text-sm text-gray-500">New Patient</p>
                  </div>
                  <span className="text-green-500 text-sm">↑ 15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold">166.3k</p>
                    <p className="text-sm text-gray-500">Old Patient</p>
                  </div>
                  <span className="text-green-500 text-sm">↑ 15%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gender</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center">
                <p className="text-gray-500">
                  Gender distribution chart would go here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Visit Id</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Diseases</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPatients.map((patient, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {patient.name}
                    </TableCell>
                    <TableCell>{patient.visitId}</TableCell>
                    <TableCell>{patient.date}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.diseases}</TableCell>
                    <TableCell>{patient.status}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={`/image/icons8-business-man-with-beard-100.png`}
                          alt={appointment.name}
                        />
                        <AvatarFallback>
                          {appointment.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium">
                          {appointment.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {appointment.type}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        appointment.status
                          ? "bg-green-100  text-green-800"
                          : "text-gray-500"
                      }`}
                    >
                      {appointment.status || appointment.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
