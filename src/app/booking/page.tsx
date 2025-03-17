"use client";

import React, { useState } from "react";
import { 
  Container, TextField, Button, Typography, Box, 
  Select, MenuItem, FormControl, InputLabel, 
  SelectChangeEvent
} from "@mui/material";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    venue: "",
    date: null as Dayjs | null,
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }> | SelectChangeEvent<string>) => {
    setFormData({ ...formData, [event.target.name as string]: event.target.value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFormData((prevData) => ({ ...prevData, date }));
  };
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Venue Reservation
      </Typography>
      <div className="max-w-3xl mx-auto mt-20 mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary-600 text-white p-8">
        <h1 className="text-3xl font-bold text-center ">Venue Booking</h1>
        
      </div>
      </div>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
        {/* รับชื่อและนามสกุล */}
        <TextField
          fullWidth
          label="Name-Lastname"
          name="name"
          variant="standard"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* รับหมายเลขติดต่อ */}
        <TextField sx={{ mt: 5 }}
          fullWidth
          label="Contact-Number"
          name="contact"
          variant="standard"
          value={formData.contact}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Select สำหรับเลือกสถานที่ */}
        <FormControl fullWidth variant="standard" sx={{ mt: 5 }}>
          <InputLabel id="venue-label">Select Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        {/* Date Picker สำหรับเลือกวันที่ */}
        <Box mt={5}>
          <DateReserve/>
        </Box>

        {/* ปุ่มกดจองสถานที่ */}
        <Button
          type="submit"
          name="Book Venue"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 5 }}
        >
          Book Venue
        </Button>
      </Box>
    </Container>
  );
}