const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/ScheduleController'); // Corrected import

// Create schedule
router.post('/schedule', scheduleController.createSchedule);

// Get schedule by ID
router.get('/:schedule_id', scheduleController.getSchedule);

// Update schedule by ID
router.put('/:schedule_id', scheduleController.updateSchedule);

// Delete schedule by ID
router.delete('/:schedule_id', scheduleController.deleteSchedule);

// Get all schedules
router.get('/', scheduleController.getAllSchedules);

module.exports = router;
