import React from 'react'
import { Box } from 'grid-styled'
import { SocialIcon } from '../../utils/common-styles'

import {
  githubLink,
  linkedinLink,
  stackoverflowLink,
  skypeLink,
  twitterLink,
  youtubeLink,
  mediumLink,
} from '../../data/socialLinks'
import Github from 'react-icons/lib/go/mark-github'
import Linkedin from 'react-icons/lib/ti/social-linkedin'
import Twitter from 'react-icons/lib/ti/social-twitter'
import Youtube from 'react-icons/lib/ti/social-youtube'
import Medium from 'react-icons/lib/fa/medium'
import Stackoverflow from 'react-icons/lib/fa/stack-overflow'
import Skype from 'react-icons/lib/fa/skype'

export default () => (
  <Box mt={[1, 2, 3]}>
    <SocialIcon target="_blank" href={linkedinLink}>
      <Linkedin width="50px" height="50px" />
    </SocialIcon>
    <SocialIcon target="_blank" href={twitterLink}>
      <Twitter width="45px" height="45px" />
    </SocialIcon>
    <SocialIcon target="_blank" href={youtubeLink}>
      <Youtube width="46px" height="52px" />
    </SocialIcon>
    <SocialIcon target="_blank" href={githubLink}>
      <Github width="35px" height="35px" />
    </SocialIcon>
    <SocialIcon target="_blank" href={mediumLink}>
      <Medium width="38px" height="38px" />
    </SocialIcon>
    <SocialIcon target="_blank" href={stackoverflowLink}>
      <Stackoverflow width="28px" height="28px" />
    </SocialIcon>
    <SocialIcon target="_blank" href={skypeLink}>
      <Skype width="34px" height="34px" />
    </SocialIcon>
  </Box>
)
