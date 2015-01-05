// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

Polymer('axiom-drop-zone', {
  computed: {
    // Compute [arrowtype] and [orientation] so that they can be used
    // in template binding.
    arrowtype: '(position == "top" || position == "right") ? "up" : "down"',
    orientation: '(position == "top" || position == "bottom") ? "horizontal" : "vertical"',
  },
  active: '',
  activeChanged: function(oldValue, newValue) {
    if (newValue || newValue === "") {
      this.$.icon.classList.add("active");
    } else {
      this.$.icon.classList.remove("active");
    }
  }
});