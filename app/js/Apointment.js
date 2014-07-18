myApp.factory('Appointment' ,function () {
	var appointments = [];

	Appointment.getList = function () {
		return appointments;
	}; 	

	Apointment.setList = function (data) {
		this.title = data.title;
		this.duration = data.duration;
		this.date = new Data();
		this.comment = data.comment;
	};

	Apointment.prototype.save = function(apointment) {
		appointments.push(this);
	};

	return Apointment;
});
