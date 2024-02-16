import { useEffect } from 'react';
import tokens from '@altinn/figma-design-tokens/dist/tokens';

import { Table } from '../Table';
import {
  TableCellColor,
  TableCellFont,
  TableCellSpace,
} from '../TableCells/TableCells';

interface TokenTableProps {
  jsonKey: string;
  componentName: string;
  showPreview: boolean;
  description?: boolean;
}

const TokensTable = (tokenTable: TokenTableProps) => {
  useEffect(() => {
    getRows();
  });

  const getPreview = (key: string, value: string) => {
    if (key.includes('color')) {
      return <TableCellColor color={value} />;
    } else if (key.includes('font_size')) {
      return <TableCellFont size={value} />;
    } else {
      return <TableCellSpace size={value} />;
    }
  };

  const getHeadings = () => {
    if (tokenTable.showPreview) {
      return ['Navn', 'Verdi', 'Forhåndsvisning'];
    } else {
      return ['Navn', 'Verdi'];
    }
  };

  const getRows = () => {
    const row = flattenObject(
      getJsonByKey(tokenTable.jsonKey, tokens),
      '$' + tokenTable.componentName + '-',
    );

    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    const rows: { row: (string | JSX.Element | unknown)[] }[] = [];

    Object.entries(row).map(([key, value]) => {
      if (tokenTable.showPreview) {
        rows.push({
          row: [key, value, getPreview(key, value as string)],
        });
      } else {
        rows.push({
          row: [key, value],
        });
      }
    });
    return rows;
  };

  const getJsonByKey = (path: string, json: Record<string, unknown>) => {
    const parts = path.split('.');
    return parts.reduce<Record<string, unknown>>((acc, part) => {
      acc[part] = json[part];
      return acc;
    }, {});
  };

  type FlattenObject = (
    jsonObject: Record<string, unknown>,
    prefix: string,
    result?: Record<string, unknown>,
  ) => Record<string, unknown>;

  const flattenObject: FlattenObject = (
    jsonObject = {},
    prefix = '',
    result = {},
  ) => {
    for (const key in jsonObject) {
      if (typeof jsonObject[key] !== 'object') {
        if (key !== ('type' || 'description')) {
          result[prefix.slice(0, -1)] = jsonObject[key];
        }
      } else {
        flattenObject(
          jsonObject[key] as Record<string, unknown>,
          `${prefix}${key}-`,
          result,
        );
      }
    }
    return result;
  };

  if (!getRows().length && tokenTable.description) {
    return <p>Det finnes ingen spesifikke variabler for denne komponenten.</p>;
  }

  return (
    <>
      {tokenTable.description && (
        <p>
          Komponenten har følgende CSS-variabler tilgjengelige som kan
          overstyres ved behov:
        </p>
      )}
      <Table
        headings={getHeadings()}
        rows={getRows()}
      />
    </>
  );
};

export { TokensTable };
