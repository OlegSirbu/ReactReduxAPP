import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

const NotesForm = ({note, onSave, onChange, saving, errors}) => {
  return (
    <form >
      <TextInput
        name="title"
        label="Title"
        value={note.title}
        onChange={onChange}
        error={errors}
      />

      <TextInput
        name="text"
        label="Text"
        value={note.text}
        onChange={onChange}
        error={errors}
      />

      <Button
        label={saving ? "Saving..." : "Save"}
        onClick={onSave}
      />

    </form>
  )
};

export default NotesForm;
