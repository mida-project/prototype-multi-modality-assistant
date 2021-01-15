#!/bin/sh
###########################
PATHREPO=${PWD%/*}
###########################
PATHPMMA="prototype-multi-modality-assistant"
PATHDUAI="dataset-uta7-ai"
###########################
PATHSRCF="src"
PATHCMMN="common"
PATHMSSG="messages"
PATHOTPT="outputs"
###########################
FROMPATHMSSG=${PATHREPO}/${PATHDUAI}/${PATHMSSG}/*
FROMPATHOUTP=${PATHREPO}/${PATHDUAI}/${PATHOTPT}/*
###########################
TOPATHTGMSSG=${PATHREPO}/${PATHPMMA}/${PATHSRCF}/${PATHCMMN}/${PATHMSSG}
TOPATHTGOUTP=${PATHREPO}/${PATHPMMA}/${PATHSRCF}/${PATHCMMN}/${PATHOTPT}
###########################
###########################
###########################
###########################
# Copy all configs of the
# PMMA
###########################
cp -r $FROMPATHMSSG $TOPATHTGMSSG
cp -r $FROMPATHOUTP $TOPATHTGOUTP
###########################
###########################
###########################
###########################