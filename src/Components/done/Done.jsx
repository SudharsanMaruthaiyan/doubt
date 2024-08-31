import React, { useState, useRef, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Grid, Paper, 
  Button, Radio, RadioGroup, FormControlLabel, FormControl, 
  FormLabel, LinearProgress, Card, CardContent, CardHeader
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { QuizQuestion } from '../../assets/Api/QuizQuestion';

// Sample quiz data
const quizData = [
  {
    type: "multiple",
    question: "You are watching the TV news and see this appear on the screen:",
    options: ["A tweet", "A hashtag", "A tag"],
    correctAnswer: "A hashtag"
  },
  {
    type: "image",
    question: "What does this image represent?",
    imageUrl: "/api/placeholder/400/300", // Replace with actual image URL
    options: ["Social media icon", "Website logo", "Mobile app interface"],
    correctAnswer: "Social media icon"
  },
  // Add more questions here to demonstrate scrolling...
  {
    type: "multiple",
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    type: "multiple",
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    type: "multiple",
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    type: "multiple",
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  }
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const QuizProgressBar = ({ progress }) => (
  <StyledPaper>
    <Typography variant="h6" gutterBottom>
      Quiz Complete
    </Typography>
    <LinearProgress variant="determinate" value={progress} />
    <Typography variant="body2" align="right" style={{ marginTop: 8 }}>
      {progress}%
    </Typography>
  </StyledPaper>
);

const QuizNavigation = ({ totalQuestions, currentQuestion, onNavigate, onFinish }) => (
  <StyledPaper>
    <Typography variant="h6" gutterBottom>
      Quiz Navigation
    </Typography>
    <Grid container spacing={1} style={{ marginBottom: 16 }}>
      {[...Array(totalQuestions)].map((_, index) => (
        <Grid item xs={4} key={index}>
          <Button 
            variant={currentQuestion === index ? "contained" : "outlined"}
            onClick={() => onNavigate(index)}
            fullWidth
          >
            {index + 1}
          </Button>
        </Grid>
      ))}
    </Grid>
    <Button variant="contained" color="primary" fullWidth onClick={onFinish}>
      Finish
    </Button>
  </StyledPaper>
);

const MultipleChoiceQuestion = ({ question, options, onAnswer, questionNumber }) => (
  <Card id={`question-${questionNumber}`} style={{ marginBottom: 16 }}>
    <CardHeader title={`Question ${questionNumber}: ${question}`} />
    <CardContent>
      <FormControl component="fieldset">
        <RadioGroup onChange={(e) => onAnswer(e.target.value)}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </CardContent>
  </Card>
);

const ImageQuestion = ({ question, imageUrl, options, onAnswer, questionNumber }) => (
  <Card id={`question-${questionNumber}`} style={{ marginBottom: 16 }}>
    <CardHeader title={`Question ${questionNumber}: ${question}`} />
    <CardContent>
      <img src={imageUrl} alt="Question Image" style={{ width: '100%', marginBottom: 16 }} />
      <FormControl component="fieldset">
        <RadioGroup onChange={(e) => onAnswer(e.target.value)}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </CardContent>
  </Card>
);

const Done = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const questionsRef = useRef([]);

  useEffect(() => {
    questionsRef.current = questionsRef.current.slice(0, quizData.length);
  }, []);

  const handleAnswer = (answer) => {
    // Here you would typically check if the answer is correct
    // and update the score accordingly

    // Increase progress
    setProgress(prev => Math.min(prev + (100 / quizData.length), 100));

    // Move to next question
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      scrollToQuestion(currentQuestion + 1);
    }
  };

  const handleNavigate = (questionIndex) => {
    setCurrentQuestion(questionIndex);
    scrollToQuestion(questionIndex);
  };

  const scrollToQuestion = (questionIndex) => {
    questionsRef.current[questionIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleFinish = () => {
    // Implement quiz finish logic here
    console.log("Quiz finished");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Quiz Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <QuizProgressBar progress={progress} />
            <QuizNavigation 
              totalQuestions={quizData.length}
              currentQuestion={currentQuestion}
              onNavigate={handleNavigate}
              onFinish={handleFinish}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper style={{ maxHeight: '80vh', overflow: 'auto', padding: 16 }}>
              {quizData.map((question, index) => (
                <div key={index} ref={el => questionsRef.current[index] = el}>
                  {question.type === "multiple" ? (
                    <MultipleChoiceQuestion
                      question={question.question}
                      options={question.options}
                      onAnswer={handleAnswer}
                      questionNumber={index + 1}
                    />
                  ) : (
                    <ImageQuestion
                      question={question.question}
                      imageUrl={question.imageUrl}
                      options={question.options}
                      onAnswer={handleAnswer}
                      questionNumber={index + 1}
                    />
                  )}
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Done;