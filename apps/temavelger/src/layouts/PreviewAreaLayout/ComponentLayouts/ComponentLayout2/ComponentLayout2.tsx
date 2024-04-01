import {
  Accordion,
  Button,
  Checkbox,
  Combobox,
  Divider,
  DropdownMenu,
  NativeSelect,
  Pagination,
  Paragraph,
  Radio,
  Tag,
  Textarea,
  Textfield,
  ToggleGroup,
} from '@digdir/designsystemet-react';
import { useState } from 'react';

import CardComponentAlt1 from '../../../../components/CardComponentAlt1/CardComponentAlt1';

import styles from './ComponentLayout2.module.css';

const ComponentLayout2 = () => {
  const [activeComponent, setActiveComponent] = useState('button');
  const [value, setValue] = useState<string>();

  const showSelectedComponent = (component: string) => {
    switch (component) {
      case 'accordion':
        return (
          <Accordion color='neutral'>
            <Accordion.Item>
              <Accordion.Header level={3}>
                Hvem kan registrere seg i Frivillighetsregisteret?
              </Accordion.Header>
              <Accordion.Content>
                For å kunne bli registrert i Frivillighetsregisteret, må
                organisasjonen drive frivillig virksomhet. Det er bare
                foreninger, stiftelser og aksjeselskap som kan registreres.
                Virksomheten kan ikke dele ut midler til fysiske personer.
                Virksomheten må ha et styre.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header level={3}>
                Hvordan går jeg fram for å registrere i Frivillighetsregisteret?
              </Accordion.Header>
              <Accordion.Content>
                Virksomheten må være registrert i Enhetsregisteret før den kan
                bli registrert i Frivillighetsregisteret. Du kan registrere i
                begge registrene samtidig i Samordnet registermelding.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        );
      case 'button':
        return <Button>Click me!</Button>;
      case 'card':
        return <CardComponentAlt1 color='first' />;
      case 'checkbox':
        return (
          <Checkbox.Group
            legend='Bekreft at du er over 18 år'
            description='For at vi skal kunne sende deg opplysningen du ber om, må du bekrefte at du er myndig.'
          >
            <Checkbox value='samtykke'>
              Jeg bekrefter at jeg er over 18 år
            </Checkbox>
          </Checkbox.Group>
        );
      case 'combobox':
        return (
          <Combobox
            description='Velg et sted'
            label='Hvor går reisen?'
            onValueChange={function noRefCheck() {}}
            size='medium'
          >
            <Combobox.Empty>Fant ingen treff</Combobox.Empty>
            <Combobox.Option value='leikanger'>Leikanger</Combobox.Option>
            <Combobox.Option value='oslo'>Oslo</Combobox.Option>
            <Combobox.Option value='bronnoysund'>Brønnøysund</Combobox.Option>
            <Combobox.Option value='stavanger'>Stavanger</Combobox.Option>
            <Combobox.Option value='trondheim'>Trondheim</Combobox.Option>
            <Combobox.Option value='tromso'>Tromsø</Combobox.Option>
            <Combobox.Option value='bergen'>Bergen</Combobox.Option>
            <Combobox.Option value='moirana'>Mo i Rana</Combobox.Option>
          </Combobox>
        );
      case 'dropdownMenu':
        return (
          <DropdownMenu
            onClose={function noRefCheck() {}}
            placement='bottom-end'
            size='medium'
          >
            <DropdownMenu.Trigger>Dropdown</DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group heading='Links'>
                <DropdownMenu.Item
                  as='a'
                  href='https://github.com/digdir/designsystemet'
                  target='_blank'
                >
                  Github
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  as='a'
                  href='https://designsystemet.no'
                  target='_blank'
                >
                  Designsystemet.no
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <Divider />
              <DropdownMenu.Group>
                <DropdownMenu.Item>Button 1</DropdownMenu.Item>
                <DropdownMenu.Item>Button 2</DropdownMenu.Item>
                <DropdownMenu.Item disabled>Disabled</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        );
      case 'nativeSelect':
        return (
          <NativeSelect
            label='Velg et fjell'
            size='medium'
          >
            <option value='blank'>Velg …</option>
            <option value='everest'>Mount Everest</option>
            <option value='aconcagua'>Aconcagua</option>
            <option value='denali'>Denali</option>
            <option value='kilimanjaro'>Kilimanjaro</option>
            <option value='elbrus'>Elbrus</option>
            <option value='vinson'>Mount Vinson</option>
            <option value='puncakjaya'>Puncak Jaya</option>
            <option value='kosciuszko'>Mount Kosciuszko</option>
          </NativeSelect>
        );

      case 'pagination':
        return (
          <Pagination
            currentPage={3}
            itemLabel={(page) => `Side ${page}`}
            nextLabel='Neste'
            onChange={function noRefCheck() {}}
            previousLabel='Forrige'
            size='small'
            totalPages={10}
          />
        );
      case 'radio':
        return (
          <Radio.Group
            description='Velg din favorittsmak blant alternativene.'
            error=''
            legend='Hvilken iskremsmak er best?'
            onChange={function noRefCheck() {}}
            size='medium'
          >
            <Radio value='vanilje'>Vanilje</Radio>
            <Radio
              description='Jordbær er best'
              value='jordbær'
            >
              Jordbær
            </Radio>
            <Radio value='sjokolade'>Sjokolade</Radio>
            <Radio value='spiser-ikke-is'>Jeg spiser ikke iskrem</Radio>
          </Radio.Group>
        );

      case 'tag':
        return (
          <>
            <Tag color='neutral'>neutral</Tag>
            <Tag color='success'>success</Tag>
            <Tag color='warning'>warning</Tag>
            <Tag color='danger'>danger</Tag>
            <Tag color='info'>info</Tag>
            <Tag color='first'>first</Tag>
            <Tag color='second'>second</Tag>
            <Tag color='third'>third</Tag>
          </>
        );
      case 'textarea':
        return (
          <>
            <Paragraph>Du har skrevet inn: {value}</Paragraph>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 'var(--fds-spacing-2)',
                gap: 'var(--fds-spacing-2)',
              }}
            >
              <Textarea
                label='Kontroller meg!'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                cols={40}
              />
              <Button onClick={() => setValue('Pizza')}>
                Jeg vil ha Pizza
              </Button>
            </div>
          </>
        );
      case 'textfield':
        return (
          <>
            <Paragraph>Du har skrevet inn: {value}</Paragraph>
            <div
              style={{
                display: 'flex',
                alignItems: 'end',
                marginTop: 'var(--fds-spacing-2)',
                gap: 'var(--fds-spacing-2)',
              }}
            >
              <Textfield
                label='Kontroller meg!'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button onClick={() => setValue('Kake')}>Jeg vil ha Kake</Button>
            </div>
          </>
        );
      case 'toggleGroup':
        return (
          <ToggleGroup
            defaultValue='Peanut'
            name='toggle-group-nuts'
            onChange={function noRefCheck() {}}
            size='medium'
          >
            <ToggleGroup.Item>Peanut</ToggleGroup.Item>
            <ToggleGroup.Item>Walnut</ToggleGroup.Item>
            <ToggleGroup.Item>Pistachio 🤤</ToggleGroup.Item>
          </ToggleGroup>
        );
      default:
        return <Button />;
    }
  };
  return (
    <div>
      <div className={styles.componentSelect}>
        <NativeSelect onChange={(e) => setActiveComponent(e.target.value)}>
          <option value='button'>Button</option>
          <option value='accordion'>Accordion</option>
          <option value='card'>Card</option>
          <option value='checkbox'>Checkbox</option>
          <option value='combobox'>Combobox</option>
          <option value='dropdownMenu'>Dropdown Menu</option>
          <option value='nativeSelect'>Native Select</option>
          <option value='pagination'>Pagination</option>
          <option value='radio'>Radio</option>
          <option value='tag'>Tag</option>
          <option value='textarea'>Textarea</option>
          <option value='textfield'>Textfield</option>
          <option value='toggleGroup'>Toggle Group</option>
        </NativeSelect>
      </div>

      <div className={styles.componentContainer}>
        <div className={styles.component}>
          {showSelectedComponent(activeComponent)}
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout2;
