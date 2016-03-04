import fs from 'fs'
import Table from './Table'
import mjml from 'mjml'

/*
  Compile an mjml string
*/
const htmlOutput = mjml.mjml2html(`<mj-body>
  <mj-section>
    <mj-column width="100%">

      <mj-table>
        <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
          <th style="padding: 0 15px 0 0;">Year</th>
          <th style="padding: 0 15px;">Language</th>
          <th style="padding: 0 0 0 15px;">Inspired from</th>
        </tr>
        <tr>
          <td style="padding: 0 15px 0 0;">1995</td>
          <td style="padding: 0 15px;">PHP</td>
          <td style="padding: 0 0 0 15px;">C, Shell Unix</td>
        </tr>
        <tr>
          <td style="padding: 0 15px 0 0;">1995</td>
          <td style="padding: 0 15px;">JavaScript</td>
          <td style="padding: 0 0 0 15px;">Scheme, Self</td>
        </tr>
      </mj-table>

    </mj-column>
  </mj-section>
</mj-body>
`)

/*
  Print the responsive HTML generated
*/
fs.writeFile('output.html', htmlOutput);
