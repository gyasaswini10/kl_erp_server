let courses = [];

const getAllCourses = (req, res) => {
    res.json(courses);
};

const getCourseById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const course = courses.find(course => course.id === id);
    course ? res.json(course) : res.status(404).send('Course not found');
};

const addCourse = (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    courses.push(newCourse);
    res.status(201).json({ message: 'Course added', newCourse });
};

module.exports = {
    getAllCourses,
    getCourseById,
    addCourse
};
