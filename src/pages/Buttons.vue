<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Buttons</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Buttons</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section class="content">
    <div class="content-fluid">
      <div class="row">
        <div class="col-md-12">
          <NixCard card-style="card-info card-outline">
            <NixCardHeader>
              <h1 class="card-title">
                <i class="fas fa-edit"></i>
                Buttons
              </h1>
            </NixCardHeader>
            <NixCardBody>
              <table class="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th>Normal</th>
                    <th>Large <code>.btn-lg</code></th>
                    <th>Small <code>.btn-sm</code></th>
                    <th>Extra Small <code>.btn-xs</code></th>
                    <th>Flat <code>.btn-flat</code></th>
                    <th>Disabled <code>.disabled</code></th>
                  </tr>
                  <tr>
                    <td><NixButton block>Default</NixButton></td>
                    <td><NixButton block size="large">Default</NixButton></td>
                    <td><NixButton block size="small">Default</NixButton></td>
                    <td><NixButton block size="x-small">Default</NixButton></td>
                    <td><NixButton block flat>Default</NixButton></td>
                    <td><NixButton block disabled>Default</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="primary">Primary</NixButton></td>
                    <td><NixButton block btn-style="primary" size="large">Primary</NixButton></td>
                    <td><NixButton block btn-style="primary" size="small">Primary</NixButton></td>
                    <td><NixButton block btn-style="primary" size="x-small">Primary</NixButton></td>
                    <td><NixButton block btn-style="primary" flat>Primary</NixButton></td>
                    <td><NixButton block btn-style="primary" disabled>Primary</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="secondary">Secondary</NixButton></td>
                    <td><NixButton block btn-style="secondary" size="large">Secondary</NixButton></td>
                    <td><NixButton block btn-style="secondary" size="small">Secondary</NixButton></td>
                    <td><NixButton block btn-style="secondary" size="x-small">Secondary</NixButton></td>
                    <td><NixButton block btn-style="secondary" flat>Secondary</NixButton></td>
                    <td><NixButton block btn-style="secondary" disabled>Secondary</NixButton></td>
                  </tr>                  
                  <tr>
                    <td><NixButton block btn-style="success">Success</NixButton></td>
                    <td><NixButton block btn-style="success" size="large">Success</NixButton></td>
                    <td><NixButton block btn-style="success" size="small">Success</NixButton></td>
                    <td><NixButton block btn-style="success" size="x-small">Success</NixButton></td>
                    <td><NixButton block btn-style="success" flat>Success</NixButton></td>
                    <td><NixButton block btn-style="success" disabled>Success</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="info">Info</NixButton></td>
                    <td><NixButton block btn-style="info" size="large">Info</NixButton></td>
                    <td><NixButton block btn-style="info" size="small">Info</NixButton></td>
                    <td><NixButton block btn-style="info" size="x-small">Info</NixButton></td>
                    <td><NixButton block btn-style="info" flat>Info</NixButton></td>
                    <td><NixButton block btn-style="info" disabled>Info</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="danger">Danger</NixButton></td>
                    <td><NixButton block btn-style="danger" size="large">Danger</NixButton></td>
                    <td><NixButton block btn-style="danger" size="small">Danger</NixButton></td>
                    <td><NixButton block btn-style="danger" size="x-small">Danger</NixButton></td>
                    <td><NixButton block btn-style="danger" flat>Danger</NixButton></td>
                    <td><NixButton block btn-style="danger" disabled>Danger</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="warning">Warning</NixButton></td>
                    <td><NixButton block btn-style="warning" size="large">Warning</NixButton></td>
                    <td><NixButton block btn-style="warning" size="small">Warning</NixButton></td>
                    <td><NixButton block btn-style="warning" size="x-small">Warning</NixButton></td>
                    <td><NixButton block btn-style="warning" flat>Warning</NixButton></td>
                    <td><NixButton block btn-style="warning" disabled>Warning</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="light">Light</NixButton></td>
                    <td><NixButton block btn-style="light" size="large">Light</NixButton></td>
                    <td><NixButton block btn-style="light" size="small">Light</NixButton></td>
                    <td><NixButton block btn-style="light" size="x-small">Light</NixButton></td>
                    <td><NixButton block btn-style="light" flat>Light</NixButton></td>
                    <td><NixButton block btn-style="light" disabled>Light</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="dark">Dark</NixButton></td>
                    <td><NixButton block btn-style="dark" size="large">Dark</NixButton></td>
                    <td><NixButton block btn-style="dark" size="small">Dark</NixButton></td>
                    <td><NixButton block btn-style="dark" size="x-small">Dark</NixButton></td>
                    <td><NixButton block btn-style="dark" flat>Dark</NixButton></td>
                    <td><NixButton block btn-style="dark" disabled>Dark</NixButton></td>
                  </tr>
                </tbody>
              </table>     
            </NixCardBody>        
          </NixCard>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <NixCard card-style="card-info card-outline">
            <NixCardHeader>
              <h1 class="card-title">
                <i class="fas fa-edit"></i>
                Outline Buttons
              </h1>
            </NixCardHeader>            
            <NixCardBody>
              <table class="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th>Normal</th>
                    <th>Large <code>.btn-lg</code></th>
                    <th>Small <code>.btn-sm</code></th>
                    <th>Extra Small <code>.btn-xs</code></th>
                    <th>Flat <code>.btn-flat</code></th>
                    <th>Disabled <code>.disabled</code></th>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="outline-primary">Primary</NixButton></td>
                    <td><NixButton block btn-style="outline-primary" size="large">Primary</NixButton></td>
                    <td><NixButton block btn-style="outline-primary" size="small">Primary</NixButton></td>
                    <td><NixButton block btn-style="outline-primary" size="x-small">Primary</NixButton></td>
                    <td><NixButton block btn-style="outline-primary" flat>Primary</NixButton></td>
                    <td><NixButton block btn-style="outline-primary" disabled>Primary</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="outline-secondary">Secondary</NixButton></td>
                    <td><NixButton block btn-style="outline-secondary" size="large">Secondary</NixButton></td>
                    <td><NixButton block btn-style="outline-secondary" size="small">Secondary</NixButton></td>
                    <td><NixButton block btn-style="outline-secondary" size="x-small">Secondary</NixButton></td>
                    <td><NixButton block btn-style="outline-secondary" flat>Secondary</NixButton></td>
                    <td><NixButton block btn-style="outline-secondary" disabled>Secondary</NixButton></td>
                  </tr>                   
                  <tr>
                    <td><NixButton block btn-style="outline-success">Success</NixButton></td>
                    <td><NixButton block btn-style="outline-success" size="large">Success</NixButton></td>
                    <td><NixButton block btn-style="outline-success" size="small">Success</NixButton></td>
                    <td><NixButton block btn-style="outline-success" size="x-small">Success</NixButton></td>
                    <td><NixButton block btn-style="outline-success" flat>Success</NixButton></td>
                    <td><NixButton block btn-style="outline-success" disabled>Success</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="outline-info">Info</NixButton></td>
                    <td><NixButton block btn-style="outline-info" size="large">Info</NixButton></td>
                    <td><NixButton block btn-style="outline-info" size="small">Info</NixButton></td>
                    <td><NixButton block btn-style="outline-info" size="x-small">Info</NixButton></td>
                    <td><NixButton block btn-style="outline-info" flat>Info</NixButton></td>
                    <td><NixButton block btn-style="outline-info" disabled>Info</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="outline-danger">Danger</NixButton></td>
                    <td><NixButton block btn-style="outline-danger" size="large">Danger</NixButton></td>
                    <td><NixButton block btn-style="outline-danger" size="small">Danger</NixButton></td>
                    <td><NixButton block btn-style="outline-danger" size="x-small">Danger</NixButton></td>
                    <td><NixButton block btn-style="outline-danger" flat>Danger</NixButton></td>
                    <td><NixButton block btn-style="outline-danger" disabled>Danger</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="outline-warning">Warning</NixButton></td>
                    <td><NixButton block btn-style="outline-warning" size="large">Warning</NixButton></td>
                    <td><NixButton block btn-style="outline-warning" size="small">Warning</NixButton></td>
                    <td><NixButton block btn-style="outline-warning" size="x-small">Warning</NixButton></td>
                    <td><NixButton block btn-style="outline-warning" flat>Warning</NixButton></td>
                    <td><NixButton block btn-style="outline-warning" disabled>Warning</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="outline-light">Light</NixButton></td>
                    <td><NixButton block btn-style="outline-light" size="large">Light</NixButton></td>
                    <td><NixButton block btn-style="outline-light" size="small">Light</NixButton></td>
                    <td><NixButton block btn-style="outline-light" size="x-small">Light</NixButton></td>
                    <td><NixButton block btn-style="outline-light" flat>Light</NixButton></td>
                    <td><NixButton block btn-style="outline-light" disabled>Light</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="outline-dark">Dark</NixButton></td>
                    <td><NixButton block btn-style="outline-dark" size="large">Dark</NixButton></td>
                    <td><NixButton block btn-style="outline-dark" size="small">Dark</NixButton></td>
                    <td><NixButton block btn-style="outline-dark" size="x-small">Dark</NixButton></td>
                    <td><NixButton block btn-style="outline-dark" flat>Dark</NixButton></td>
                    <td><NixButton block btn-style="outline-dark" disabled>Dark</NixButton></td>
                  </tr>
                </tbody>
              </table>                
            </NixCardBody>            
          </NixCard>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <NixCard card-style="card-info card-outline">
            <NixCardHeader>
              <h1 class="card-title">
                <i class="fas fa-edit"></i>
                Gradient Buttons (bg-gradient-*)
              </h1>
            </NixCardHeader>            
            <NixCardBody>
              <table class="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th>Normal</th>
                    <th>Large <code>.btn-lg</code></th>
                    <th>Small <code>.btn-sm</code></th>
                    <th>Extra Small <code>.btn-xs</code></th>
                    <th>Flat <code>.btn-flat</code></th>
                    <th>Disabled <code>.disabled</code></th>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="gradient-primary">Primary</NixButton></td>
                    <td><NixButton block btn-style="gradient-primary" size="large">Primary</NixButton></td>
                    <td><NixButton block btn-style="gradient-primary" size="small">Primary</NixButton></td>
                    <td><NixButton block btn-style="gradient-primary" size="x-small">Primary</NixButton></td>
                    <td><NixButton block btn-style="gradient-primary" flat>Primary</NixButton></td>
                    <td><NixButton block btn-style="gradient-primary" disabled>Primary</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="gradient-secondary">Secondary</NixButton></td>
                    <td><NixButton block btn-style="gradient-secondary" size="large">Secondary</NixButton></td>
                    <td><NixButton block btn-style="gradient-secondary" size="small">Secondary</NixButton></td>
                    <td><NixButton block btn-style="gradient-secondary" size="x-small">Secondary</NixButton></td>
                    <td><NixButton block btn-style="gradient-secondary" flat>Secondary</NixButton></td>
                    <td><NixButton block btn-style="gradient-secondary" disabled>Secondary</NixButton></td>
                  </tr>                   
                  <tr>
                    <td><NixButton block btn-style="gradient-success">Success</NixButton></td>
                    <td><NixButton block btn-style="gradient-success" size="large">Success</NixButton></td>
                    <td><NixButton block btn-style="gradient-success" size="small">Success</NixButton></td>
                    <td><NixButton block btn-style="gradient-success" size="x-small">Success</NixButton></td>
                    <td><NixButton block btn-style="gradient-success" flat>Success</NixButton></td>
                    <td><NixButton block btn-style="gradient-success" disabled>Success</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="gradient-info">Info</NixButton></td>
                    <td><NixButton block btn-style="gradient-info" size="large">Info</NixButton></td>
                    <td><NixButton block btn-style="gradient-info" size="small">Info</NixButton></td>
                    <td><NixButton block btn-style="gradient-info" size="x-small">Info</NixButton></td>
                    <td><NixButton block btn-style="gradient-info" flat>Info</NixButton></td>
                    <td><NixButton block btn-style="gradient-info" disabled>Info</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="gradient-danger">Danger</NixButton></td>
                    <td><NixButton block btn-style="gradient-danger" size="large">Danger</NixButton></td>
                    <td><NixButton block btn-style="gradient-danger" size="small">Danger</NixButton></td>
                    <td><NixButton block btn-style="gradient-danger" size="x-small">Danger</NixButton></td>
                    <td><NixButton block btn-style="gradient-danger" flat>Danger</NixButton></td>
                    <td><NixButton block btn-style="gradient-danger" disabled>Danger</NixButton></td>
                  </tr>
                  <tr>
                    <td><NixButton block btn-style="gradient-warning">Warning</NixButton></td>
                    <td><NixButton block btn-style="gradient-warning" size="large">Warning</NixButton></td>
                    <td><NixButton block btn-style="gradient-warning" size="small">Warning</NixButton></td>
                    <td><NixButton block btn-style="gradient-warning" size="x-small">Warning</NixButton></td>
                    <td><NixButton block btn-style="gradient-warning" flat>Warning</NixButton></td>
                    <td><NixButton block btn-style="gradient-warning" disabled>Warning</NixButton></td>
                  </tr>                  
                </tbody>
              </table>                
            </NixCardBody>            
          </NixCard>
        </div>
      </div>      

      <div class="row">
        <div class="col-md-6">
          <NixCard>
            <NixCardHeader>
              <h3 class="card-title">Buttons with Icons</h3>
            </NixCardHeader>
            <NixCardBody card-style="row">              
              <div class="col-md-6">
                <NixButton block btn-style="primary" icon="fa fa-bell"> .btn-block</NixButton>
                <NixButton block flat btn-style="info" icon="fa fa-bell"> .btn-block .btn-flat</NixButton>
                <NixButton block size="small" btn-style="danger" icon="fa fa-bell"> .btn-block .btn-sm</NixButton>
              </div>
              <div class="col-md-6">
                <NixButton block btn-style="outline-primary" icon="fa fa-bell">.btn-block</NixButton>
                <NixButton block flat btn-style="outline-info" icon="fa fa-book">.btn-block</NixButton>
                <NixButton block size="small" btn-style="outline-danger" icon="fa fa-book">.btn-block .btn-sm</NixButton>
              </div>              
            </NixCardBody>
          </NixCard>
          <NixCard>
            <NixCardHeader>Block Buttons</NixCardHeader>
            <NixCardBody>
              <NixButton block>.btn-block</NixButton>
              <NixButton block flat>.btn-block .btn-flat</NixButton>
              <NixButton block size="small">.btn-block .btn-sm</NixButton>
            </NixCardBody>
          </NixCard>
          <NixCard>
            <NixCardHeader>Horizontal Button Group</NixCardHeader>
            <NixCardBody card-style="table-responsive pad">
              <table class="table table-bordered">
                <tr>
                  <td>Button</td>
                  <td>Icons</td>
                  <td>Flat</td>
                  <td>Dropdown</td>
                </tr>
                <tr>
                  <td>
                    <NixButtonGroup>
                      <NixButton>Left</NixButton>
                      <NixButton>Center</NixButton>
                      <NixButton>Right</NixButton>
                    </NixButtonGroup>
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton icon="fa fa-align-left"></NixButton>
                      <NixButton icon="fa fa-align-center"></NixButton>
                      <NixButton icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton flat icon="fa fa-align-left"></NixButton>
                      <NixButton flat icon="fa fa-align-center"></NixButton>
                      <NixButton flat icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>
                    <NixButtonGroup>
                      <NixButton>1</NixButton>
                      <NixButton>2</NixButton>
                      <NixDropdownButton :items="dropdownItems"></NixDropdownButton>
                    </NixButtonGroup>                              
                  </td>
                </tr>
                <tr>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="info">Left</NixButton>
                      <NixButton btn-style="info">Center</NixButton>
                      <NixButton btn-style="info">Right</NixButton>
                    </NixButtonGroup>
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="info" icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="info" icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="info" icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="info" flat icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="info" flat icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="info" flat icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="info">1</NixButton>
                      <NixButton btn-style="info">2</NixButton>
                      <NixDropdownButton btn-style="info" :items="dropdownItems"></NixDropdownButton>
                    </NixButtonGroup>                              
                  </td>
                </tr>
                <tr>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="danger">Left</NixButton>
                      <NixButton btn-style="danger">Center</NixButton>
                      <NixButton btn-style="danger">Right</NixButton>
                    </NixButtonGroup>
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="danger" icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="danger" icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="danger" icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="danger" flat icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="danger" flat icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="danger" flat icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="danger">1</NixButton>
                      <NixButton btn-style="danger">2</NixButton>
                      <NixDropdownButton btn-style="danger" :items="dropdownItems"></NixDropdownButton>
                    </NixButtonGroup>                              
                  </td>
                </tr>  
                <tr>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="warning">Left</NixButton>
                      <NixButton btn-style="warning">Center</NixButton>
                      <NixButton btn-style="warning">Right</NixButton>
                    </NixButtonGroup>
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="warning" icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="warning" icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="warning" icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="warning" flat icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="warning" flat icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="warning" flat icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="warning">1</NixButton>
                      <NixButton btn-style="warning">2</NixButton>
                      <NixDropdownButton btn-style="warning" :items="dropdownItems"></NixDropdownButton>
                    </NixButtonGroup>                              
                  </td>
                </tr>                                 
                <tr>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="success">Left</NixButton>
                      <NixButton btn-style="success">Center</NixButton>
                      <NixButton btn-style="success">Right</NixButton>
                    </NixButtonGroup>
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="success" icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="success" icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="success" icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>            
                    <NixButtonGroup>
                      <NixButton btn-style="success" flat icon="fa fa-align-left"></NixButton>
                      <NixButton btn-style="success" flat icon="fa fa-align-center"></NixButton>
                      <NixButton btn-style="success" flat icon="fa fa-align-right"></NixButton>
                    </NixButtonGroup>                
                  </td>
                  <td>
                    <NixButtonGroup>
                      <NixButton btn-style="success">1</NixButton>
                      <NixButton btn-style="success">2</NixButton>
                      <NixDropdownButton btn-style="success" :items="dropdownItems"></NixDropdownButton>
                    </NixButtonGroup>                              
                  </td>
                </tr>                
              </table>      
            </NixCardBody>
          </NixCard>          
        </div>
        <div class="col-md-6">
          <NixCard>
            <NixCardHeader>Application Buttons</NixCardHeader>
            
            <NixCardBody>
              <NixButton btn-style="app" icon="fas fa-edit">Edit</NixButton>
              <NixButton btn-style="app" icon="fas fa-play">Play</NixButton>
              <NixButton btn-style="app" icon="fas fa-pause">Pause</NixButton>
              <NixButton btn-style="app" icon="fas fa-save">Pause</NixButton>
              <NixButton btn-style="app" icon="fas fa-bullhorn" badge="3" badge-style="warning">Notification</NixButton>
              <NixButton btn-style="app" icon="fas fa-barcode" badge="300" badge-style="success">Products</NixButton>
            </NixCardBody>
          </NixCard>
          <NixCard>
            <NixCardHeader>Vertical Button Group</NixCardHeader>
            <NixCardBody>
              <NixButtonGroup vertical>
                <NixButton btn-style="success">Top</NixButton>
                <NixButton btn-style="success">Middle</NixButton>
                <NixButton btn-style="success">Bottom</NixButton>
              </NixButtonGroup>
            </NixCardBody>
          </NixCard>
          <NixCard>
            <NixCardHeader>Radio Button Group</NixCardHeader>
            <NixCardBody>
              <NixRadioButton 
                :items="radioButtonItems" 
                block btn-style="outline-primary"
                @button-click="onButtonClick"></NixRadioButton>

              <NixSwitchButton v-model="isSwitchOn" @toggle="switchHandle"
                on-btn-style="warning" off-btn-style="danger"></NixSwitchButton>
            </NixCardBody>
          </NixCard>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import NixButton from '@/components/button/NixButton.vue';
import NixButtonGroup from '@/components/button/NixButtonGroup.vue';
import NixDropdownButton from '@/components/button/NixDropdownButton.vue';
import NixCard from '@/components/card/NixCard.vue';
import NixCardBody from '@/components/card/NixCardBody.vue';
import NixCardHeader from '@/components/card/NixCardHeader.vue';
import NixRadioButton from '@/components/button/NixRadioButton.vue';
import NixSwitchButton from '@/components/button/NixSwitchButton.vue';

const dropdownItems = ref([
  { "label": "item 1" }, 
  { "label": "item 2"}
]);

const radioButtonItems = ref([
  { 
    "label": "Active",
    "active": true
  }, 
  { "label": "Radio2" }, 
  { "label": "Radio3" }
]);

const onButtonClick = (item: any) => {
  alert('Button clicked:' + JSON.stringify(item));
};

const isSwitchOn = ref({ index: "1", state: true}); // Initial state for the switch

const switchHandle = (v: any) => {
  alert(JSON.stringify(v));
};
</script>