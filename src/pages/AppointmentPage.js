// AppointmentPage.js
import React from 'react';

const AppointmentPage = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Book an Appointment</h2>
            {/* Google Calendar Appointment Scheduling begin */}
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1G46jwTfVgtfMCvxpOvxcbEd0HxngU6pcA9eVTf9uELWug4HniRvUEt6A_vt2XEr0Cpoka46nQ?gv=true"
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
