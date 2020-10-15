import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
import './styles/styles.scss';

import QuestionWrapper from './components/QuestionWrapper.jsx';
import OneLine from './components/OneLine.jsx';


function App() {
  const [skillField, setSkillField] = useState([
    { skills: '' },
  ]);
  const [strengthField, setStrengthField] = useState([
    { strengths: '' },
  ]);
  const [attentionField, setAttentionField] = useState([
    { attentions: '' },
  ]);
  const [accomField, setAccomField] = useState([
    { title: '' , content: ''},
  ]);
  const [subjectField, setSubjectField] = useState([
    { subname:'', title: '' , content: ''},
  ]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Skills to be worked upon:", skillField);
  //   console.log("Areas of strength", strengthField);
  // };

  // const handleChangeSkill = (index, event) => {
  //   const values = [...skillField];
  //   values[index][event.target.name] = event.target.value;
  //   setSkillField(values);
  // }
  // const handleChangeStrength = (index, event) => {
  //   const values = [...strengthField];
  //   values[index][event.target.name] = event.target.value;
  //   setStrengthField(values);
  // }
  // const handleChangeAttention = (index, event) => {
  //   const values = [...attentionField];
  //   values[index][event.target.name] = event.target.value;
  //   setAttentionField(values);
  // }
  // const handleChangeAccom = (index, event) => {
  //   const values = [...accomField];
  //   values[index][event.target.name] = event.target.value;
  //   setAccomField(values);
  // }
  // const handleChangeSubject= (index, event) => {
  //   const values = [...subjectField];
  //   values[index][event.target.name] = event.target.value;
  //   setSubjectField(values);
  // }

  // const handleAddSkills = () => {
  //   setSkillField([...skillField, { skills: ''}])
  // }
  // const handleAddStrengths = () => {
  //   setStrengthField([...strengthField, { strengths: ''}])
  // }
  // const handleAddAttentions = () => {
  //   setAttentionField([...attentionField, { attentions: ''}])
  // }
  // const handleAddAccom = () => {
  //   setAccomField([...accomField, { title: '', content: ''}])
  // }
  // const handleAddSubject = () => {
  //   setSubjectField([...subjectField, { subname:'', title: '', content: ''}])
  // }
  // const handleAddSubjectTopic = () => {
  //   setSubjectField([...subjectField, { title: '', content: ''}])
  // }

  // function handleRemoveSkills(index) {
  //       const values = [...skillField];
  //       values.splice(index, 1);
  //       setSkillField(values);
  //   }
  // const handleRemoveStrengths = (index) => {
  //   const values  = [...strengthField];
  //   values.splice(index, 1);
  //   setStrengthField(values);
  // }
  // const handleRemoveAttentions = (index) => {
  //   const values  = [...attentionField];
  //   values.splice(index, 1);
  //   setAttentionField(values);
  // }
  // const handleRemoveAccom = (index) => {
  //   const values  = [...accomField];
  //   values.splice(index, 1);
  //   setAccomField(values);
  // }
  // const handleRemoveSubject = (index) => {
  //   const values  = [...subjectField];
  //   values.splice(index, 1);
  //   setSubjectField(values);
  // }
  // const handleRemoveSubjectTopic = (index) => {
  //   const values  = [...subjectField.title, ...subjectField.content];
  //   values.splice(index, 1);
  //   setSubjectField(values);
  // }

  return (
    <Container>
      {/* <form onSubmit={handleSubmit}>
      <p>Skills to work upon</p>
        { skillField.map((skillField, index) => (
          <div key={index}>
            <TextField 
              name="skills"
              placeholder="Add new skill"
              value={skillField.skills}
              onChange={event => handleChangeSkill(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveSkills(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddSkills()}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <p>Areas of strength</p>
        { strengthField.map((strengthField, index) => (
          <div key={index}>
            <TextField 
              name="strengths"
              placeholder="Add new area of strength"
              value={strengthField.strengths}
              onChange={event => handleChangeStrength(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveStrengths(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddStrengths()}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <p>Areas of Attention</p>
        { attentionField.map((attentionField, index) => (
          <div key={index}>
            <TextField 
              name="attention"
              placeholder="Add new area of attention"
              value={attentionField.attentions}
              onChange={event => handleChangeAttention(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveAttentions(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddAttentions()}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <p>Accomodation for learning, including required equipment</p>
        { accomField.map((accomField, index) => (
          <div key={index}>
            <TextField 
              name="title"
              placeholder="Title"
              value={accomField.title}
              onChange={event => handleChangeAccom(index, event)}
            />
            <br />
            <textarea 
              name="content"
              placeholder="content"
              value={accomField.content}
              onChange={event => handleChangeAccom(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveAccom(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddAccom()}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <p>Subjects</p>
        { subjectField.map((subjectField, index) => (
          <div key={index}>
            <TextField 
              name="subname"
              placeholder="Subject Name"
              value={subjectField.subname}
              onChange={event => handleChangeSubject(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveSubject(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddSubject()}
            >
              <AddIcon />
            </IconButton>
            <p></p>
            <TextField 
              name="title"
              placeholder="Title"
              value={subjectField.title}
              onChange={event => handleChangeSubject(index, event)}
            />
            <br />
            <textarea 
              name="content"
              placeholder="content"
              value={subjectField.content}
              onChange={event => handleChangeSubject(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveSubjectTopic(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddSubjectTopic()}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
      </form> */}

      <QuestionWrapper>
        {
          skillField.map((skill, idx) => (
            <OneLine 
              key={idx} 
              index={idx} 
              field={skillField}
              setField={setSkillField}
              name="skills"
              placeholder="Add new skill"
            />
          ))
        }
      </QuestionWrapper>
      <QuestionWrapper>
        {
          strengthField.map((object, idx) => (
            <OneLine 
              key={idx} 
              index={idx} 
              field={strengthField}
              setField={setStrengthField}
              name="strengths"
              placeholder="Add new area of strength"
            />
          ))
        }
      </QuestionWrapper>
      <QuestionWrapper>
        {
          attentionField.map((object, idx) => (
            <OneLine 
              key={idx} 
              index={idx} 
              field={attentionField}
              setField={setAttentionField}
              name="attentions"
              placeholder="Add new area of attention"
            />
          ))
        }
      </QuestionWrapper>
    </Container>
  );
}

export default App;
