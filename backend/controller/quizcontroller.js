const quizapp = require('../model/quizmodel');
const questions = require('../middleware/question');

// exports.Store = async(req,res)=>{
//     try{
//        await quizapp.insertMany(questions);
//        res.status(200).json({message: "successfully stored questions"})
//     }
//     catch(err){
//         console.log('something problem to store the questions')
//     }
// }

// exports.Store = async(req, res) => {
//     try {
//         const existingData = await quizapp.countDocuments();
//         if (existingData === 0) {
//             await quizapp.insertMany(questions);  // Only insert if no data exists
//             res.status(200).json({ message: "Questions successfully stored." });
//         } else {
//             res.status(200).json({ message: "Questions already exist." });
//         }
//     } catch (err) {
//         console.log("Error storing questions", err);
//         res.status(500).json({ message: "Error storing questions" });
//     }
// }

exports.Store = async (req, res) => {
    try {
        const existingData = await quizapp.countDocuments();
        if (existingData === 0) {
            console.log('Inserting new questions...');
            await quizapp.insertMany(questions);
            res.status(200).json({ message: "Questions successfully stored." });
        } else {
            console.log('Deleting old questions and inserting new ones...');
            await quizapp.deleteMany({});
            await quizapp.insertMany(questions);
            res.status(200).json({ message: "Questions updated successfully." });
        }
    } catch (err) {
        console.log("Error storing questions", err);
        res.status(500).json({ message: "Error storing questions" });
    }
};

// exports.fetchCategory=async(req,res)=>{
//     try{
//        const {category} = req.params;
//        const findcategory = await quizapp.find({category});
//        res.status(200).json({findcategory})
//     }catch(err){
//      res.status(404).json({message: 'problem in fetch by category'})
//     }
// }

exports.fetchCategory = async(req, res) => {
    try {
        const { category } = req.params;
        const questions = await quizapp.find({ category });
        if (questions.length === 0) {
            return res.status(404).json({ message: "No questions found for this category." });
        }
        res.status(200).json({ questions });
    } catch (err) {
        console.error("Error fetching by category:", err);
        res.status(500).json({ message: "Problem in fetching questions by category." });
    }
}
