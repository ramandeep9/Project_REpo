const Review = require('../models/Reviewtourist'); // Corrected require statement
// const Register = require('../models/user'); 


exports.createReview = async (req, res) => {
  try {
    const { review_text, star } = req.body; // Extract review_text and star from req.body
    // You can add additional validation or processing here if needed
    const review = await Review.create({ review_text, star}); // Create the review using Review model
    res.json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'An error occurred while creating the review' });
  }
};


// exports.getReviewsByUser = async (req, res) => {
//   try {
//     const reviews = await user.findAll({
//       where: { userid: req.params.userId },
//       include: { model: user, attributes: ['username'] } // Include the Register model to fetch the username
//     });
//     res.json(reviews);
//   } catch (error) {
//     console.error('Error fetching reviews by user:', error);
//     res.status(500).json({ error: 'An error occurred while fetching reviews' });
//   }
// };

// exports.updateReview = async (req, res) => {
//   try {
//     const review = await Review.findByPk(req.params.id);
//     if (!review) {
//       return res.status(404).json({ message: 'Review not found' });
//     }
//     review.review_text = req.body.review_text;
//     review.star = req.body.star;
//     await review.save();
//     res.json(review);
//   } catch (error) {
//     console.error('Error updating review:', error);
//     res.status(500).json({ error: 'An error occurred while updating the review' });
//   }
// };

// exports.deleteReview = async (req, res) => {
//   try {
//     const review = await Review.findByPk(req.params.id);
//     if (!review) {
//       return res.status(404).json({ message: 'Review not found' });
//     }
//     await review.destroy();
//     res.json({ message: 'Review deleted' });
//   } catch (error) {
//     console.error('Error deleting review:', error);
//     res.status(500).json({ error: 'An error occurred while deleting the review' });
//   }
// };

// exports.mutualReviewVisibility = async (req, res) => {
//   try {
//     // Your mutual review visibility logic here
//     res.json({ message: 'Mutual review visibility logic executed' });
//   } catch (error) {
//     console.error('Error executing mutual review visibility logic:', error);
//     res.status(500).json({ error: 'An error occurred while executing mutual review visibility logic' });
//   }
// };

// exports.autoDeleteReviews = async () => {
//   try {
//     // Your auto-delete reviews logic here
//     console.log('Auto-delete reviews logic executed');
//   } catch (error) {
//     console.error('Error executing auto-delete reviews logic:', error);
//   }
// };
