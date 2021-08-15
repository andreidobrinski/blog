import { useState, useEffect } from 'react';

const formatDateString = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return new Intl.DateTimeFormat('en', options).format(date);
}

const getPostedDateString = (inputPostedDate, inputUpdatedDate) => {
  const postedDate = new Date(inputPostedDate);
  const updatedDate = new Date(inputUpdatedDate);

  const sameDay = postedDate.getDate() === updatedDate.getDate();
  const sameMonth = postedDate.getMonth() === updatedDate.getMonth();
  const sameYear = postedDate.getFullYear() === updatedDate.getFullYear();

  const postedDateString = formatDateString(postedDate);

  if (sameDay && sameMonth && sameYear) return `Posted: ${postedDateString}`;

  const updatedDateString = formatDateString(updatedDate);

  return `Updated: ${updatedDateString} | Posted: ${postedDateString}`;
}

export const usePostDate = ({ postedDate, slug }) => {
  const [postDate, setPostDate] = useState(null);
  
  useEffect(() => {
    const fetchPostDate = async () => {
      try {
        const latestCommit = await (await fetch(`https://api.github.com/repos/andreidobrinski/blog/commits?path=content/blog${slug}&page=1&per_page=1`)).json();
        const latestCommitDate = latestCommit?.[0].commit.committer.date;
        const dateString = getPostedDateString(postedDate, latestCommitDate);
        setPostDate(dateString);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPostDate();
  }, []);

  return postDate;
}
