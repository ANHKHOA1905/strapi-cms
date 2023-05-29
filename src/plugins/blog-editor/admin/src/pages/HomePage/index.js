/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import Editor from "../../components/Editor";
import Wysiwyg from "../../components/Wysiwyg";

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
        <Editor />



    </div>
  );
};

export default HomePage;
