import React from 'react';

const Post = ({ title, content, author }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>{content}</p>
      <p style={styles.author}>By {author}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
  },
};

export default Post;
