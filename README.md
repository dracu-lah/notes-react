# Card Component

## Overview

The `Card` component is a draggable note-taking UI element that allows users to create and save notes. Each card can be dragged around, and its content is saved locally in the browser using `localStorage`. This component also provides visual feedback on the note's save status.

## Features

- **Create Notes**: Type text into the textarea to create or edit a note.
- **Read Notes**: Notes are stored and retrieved from `localStorage`, so they persist across page reloads.
- **Drag Notes**: Notes can be dragged around within the constraints defined by the parent container.
- **Save Feedback**: Visual indicators show whether the note is being saved, has been saved, or needs content.
