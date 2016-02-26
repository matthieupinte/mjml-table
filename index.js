import fs from 'fs'
import Table from './Table'
import mjml from 'mjml'

/*
  Compile an mjml string
*/
const htmlOutput = mjml.mjml2html(`<mj-body>
  <mj-section>
    <mj-column width="25%">
      <mj-text>Lolipop</mj-text>
      <mj-table>
        <tbody>
          <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
            <th style="padding: 0 15px 0 0;"><p>Product</p></th>
            <th style="padding: 0 15px;"><p>Quantity</p></th>
            <th style="padding: 0 0 0 15px;"><p>Price</p></th>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;"><p>Star wars mug</p></td>
            <td style="padding: 0 15px;text-align:right"><p>15</p></td>
            <td style="padding: 0 0 0 15px;"><p>$24.99</p></td>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;"><p>Star wars shirt</p></td>
            <td style="padding: 0 15px;text-align:right"><p>2</p></td>
            <td style="padding: 0 0 0 15px;"><p>$23.56</p></td>
          </tr>
        </tbody>
      </mj-table>
    </mj-column>
  </mj-section>
</mj-body>
`)

/*
  Print the responsive HTML generated
*/
fs.writeFile('output.mjml', htmlOutput);
