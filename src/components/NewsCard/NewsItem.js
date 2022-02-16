import React, { useState } from 'react'
import {
  main,
  top,
  dateWrapper,
  dateStyle,
  more,
  articleWrapper,
  content,
  title,
  titleStyle,
  descStyle,
  author,
  authorStyle,
  image,
  imageCover
} from './style.module.scss'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import IconButton from '@mui/material/IconButton';
import ImageBG from '../../images/scott-rodgerson-z0MDyylvY1k-unsplash.jpg'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
function NewsItem(data) {
  const [popup, setPopupState] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log('The big c >>> ', data)
  const NODE = data.data.node
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={main}>
      <div className={top}>
        <div className={dateWrapper}>
          <p className={dateStyle}>{NODE.frontmatter.date}</p>
        </div>
        <div className={more}>


          <IconButton color='primary' aria-describedby={id} variant="contained" onClick={handleClick}>
            <MoreVertRoundedIcon />
          </IconButton>
          <Popover
            color='dark'
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" >
              <Typography sx={{ ml: 2 }} variant='body1'>Share</Typography>
              <IconButton>
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <WhatsAppIcon />
              </IconButton>

            </Stack>
          </Popover>
          {/* */}
        </div>
      </div>
      <div className={articleWrapper}>
        <div className={content}>
          <div className={title}>

            <Link className={titleStyle} to={`/Blogs${NODE.frontmatter.path}`} >
              {NODE.frontmatter.title.replaceAll('-', ' ')}
            </Link>
            <p className={descStyle}>{NODE.excerpt}</p>
          </div>
          <div className={author}>
            <p className={authorStyle}>by {NODE.frontmatter.author}</p>
          </div>
        </div>
        <div className={image}>
          <GatsbyImage className={imageCover} image={data.image} alt={NODE.frontmatter.path} />
          {/* <img className={imageCover} src={ImageBG} alt='Article Image' /> */}
        </div>
      </div>
    </div>
  )
}

export default NewsItem