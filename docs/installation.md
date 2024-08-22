---
title: Installation
description: Create a doc page with rich content.
tags:
  - Releases
  - docusaurus
sidebar_position: 2
---
import ReactPlayer from 'react-player';

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Hello from Docusaurus

Are you ready to create the documentation site for your open source project?

## Headers

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

## Only h2 and h3 will be in the TOC by default hello tach here live 

You can configure the TOC heading levels either per-document or in the theme configuration.

The headers are well-spaced so that the hierarchy is clear.

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times

### Details element example

<details>
  <summary>Toggle me!</summary>

  This is the detailed content

  ```js
  console.log("Markdown features including the code block are available");
  ```

  You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)
  <details>
    <summary>Nested toggle! Some surprise inside...</summary>

    😲😲😲😲😲
  </details>
</details>

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


:::tip[Use tabs in admonitions]

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::

![banner](@site/static/img/CA_Banner.png)
<ReactPlayer playing controls url='https://cdn.discordapp.com/attachments/816497135440625685/1255162479336755291/zS-tu-FU1KoXDtph.mp4?ex=667c20a6&is=667acf26&hm=068d20ebc68aaf67afa35646586ee8c3f34ca7ed3b488b46b3c870d119c4ba06&'/>
![gif](@site/static/img/ASS.gif)