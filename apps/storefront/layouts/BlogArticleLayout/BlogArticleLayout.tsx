import type * as React from 'react';
import { Heading, Ingress, Paragraph } from '@digdir/design-system-react';

import { Container, MdxContent } from '../../components';
import { Link } from '../../components/Link/Link';

import classes from './BlogArticleLayout.module.css';
import { Figures } from './components/Figures';

type BlogArticleLayoutProps = {
  content: React.ReactNode;
  heading?: string;
  ingress?: string;
  date?: string;
  author?: string;
  figureCount?: number;
};

const FIGURE_COUNT = 4;

const BlogArticleLayout = ({
  content,
  heading,
  ingress,
  date,
  author,
  figureCount = FIGURE_COUNT,
}: BlogArticleLayoutProps) => {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.page}>
        {Array.from({ length: figureCount }).map((_, index) => (
          <Figures
            key={index}
            className={classes.figure}
            style={{
              /* @ts-expect-error #2353 */
              '--number': index + 1,
            }}
          />
        ))}
        <main
          id='main'
          className={classes.main}
        >
          <div className={classes.intro}>
            <Heading level={1}>{heading}</Heading>
            <Ingress className={classes.ingress}>{ingress}</Ingress>
            <Paragraph
              size='small'
              className={classes.meta}
            >
              <span>{date}</span>
              <span
                aria-hidden
                className={classes.metaSquare}
              />
              <span>{author}</span>
            </Paragraph>
          </div>
          <MdxContent classname={classes.content}>
            {content}
            <div className={classes.wantToWrite}>
              <Heading
                level={3}
                size='xsmall'
              >
                Ønsker du å skrive for bloggen?
              </Heading>
              <Paragraph size='small'>
                Ta kontakt med oss på{' '}
                <Link
                  href='https://join.slack.com/t/designsystemet/shared_invite/zt-2438eotl3-a4266Vd2IeqMWO8TBw5PrQ'
                  target='_blank'
                >
                  #designsystemet
                </Link>{' '}
                i Slack kanalen vår.
              </Paragraph>
            </div>
          </MdxContent>
        </main>
      </Container>
      <style>
        {`
    .Header_header__pXml_ {
      border-bottom: none
    }
  `}
      </style>
    </div>
  );
};

export { BlogArticleLayout };
