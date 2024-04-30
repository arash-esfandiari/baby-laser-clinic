// AppointmentPage.js
import React from 'react';

const AppointmentPage = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Book an Appointment</h2>
            {/* Google Calendar Appointment Scheduling begin */}
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1eNwEmBo78Be-NV9saNx6xygP9AzAoCp1T-aQxnvDqYQXkj5jKRGidscHC9jj2WdKGma-1TV3p?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameborder="0"
                title="Appointment Scheduling"
            ></iframe>
            {/* end Google Calendar Appointment Scheduling */}
        </div>
    );
};

export default AppointmentPage;
