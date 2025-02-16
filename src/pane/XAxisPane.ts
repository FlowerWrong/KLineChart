/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import DrawWidget from '../widget/DrawWidget'
import XAxisWidget from '../widget/XAxisWidget'

import XAxis from '../component/XAxis'

import Pane from './Pane'

export default class XAxisPane extends Pane<XAxis> {
  getName (): string {
    return 'xAxis'
  }

  protected createAxisComponent (): XAxis {
    return new XAxis(this)
  }

  protected createMainWidget (container: HTMLElement): DrawWidget<XAxis> {
    return new XAxisWidget(container, this)
  }
}
